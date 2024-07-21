const axios = require("axios").default;
const cheerio = require("cheerio");

const CALENDAR_URL =
  "https://learn.hoseo.ac.kr/calendar/view.php?view=month&cal_m=07";
const COURSE_URL = "https://learn.hoseo.ac.kr/course/view.php";

async function request(url) {
  const response = await axios.get(url, {
    headers: {
      Cookie: "MoodleSession=seh67avp6j8i6r654qv17boq07",
    },
  });
  return response.data;
}

const $calendar = cheerio.load(await request(CALENDAR_URL));
const items = $calendar("td.today ul > li > a")
  .toArray()
  .map((e) => {
    const { title, href } = e.attribs;
    return { title, href };
  });

const items1 = await Promise.all(
  items.map(async (item) => {
    const $ = cheerio.load(await request(item.href));
    const segments = $("ol.breadcrumb a").toArray();
    const course = segments
      .map((s) => {
        const { title, href } = s.attribs;
        return { title, href };
      })
      .find((s) => s.href.startsWith(COURSE_URL));
    return { item, course };
  })
);

const items2 = await Promise.all(
  items1.map(async ({ item, course }) => {
    const $ = cheerio.load(await request(course.href));
    const topics = $("ul.topics .content")
      .map(function () {
        const title = $(this).find(".sectionname > span").text();
        const activities = $(this)
          .find("ul.section li.activity .mod-indent-outer")
          .map(function () {
            const href = $(this).find(".activityinstance .aalink").attr("href");
            const name = $(this)
              .find(".activityinstance .instancename")
              .contents()
              .first()
              .text();
            const badge = $(this).find(".actions .badge").attr("class");
            const isCompleted = badge.includes("badge-completion-auto-y");
            return { name, href, isCompleted };
          })
          .toArray();
        return { title, activities };
      })
      .toArray();
    const topic = topics
      .flatMap((t) => t.activities)
      .find((a) => a.href === item.href);

    return {
      item,
      course: {
        ...course,
        topics,
      },
      topic,
    };
  })
);

console.log(items2);

for (const item of items2) {
  const title = item.item.title;
  const topic = item.topic.isCompleted;
  console.log({ title, topic });
}
