import instaicon from "../assets/team/insta.jpg";
import mailicon from "../assets/team/mailicon.png";
import linkedinicon from "../assets/team/linkedinicon.jpg";
import githubicon from "../assets/team/githubicon.jpg";
import altimg from "../assets/team/altimg.jpg";

import rohithimg from "../assets/team/rohith.jpg";
import michaelberlingoimg from "../assets/team/michael.jpg";
import nikshipimg from "../assets/team/nikshepimg.jpeg";

export const members = [
  {
    name: "Michael Berlingo",
    path: michaelberlingoimg, // Assuming you have defined michaelBerlingo image path somewhere
    about:
      "Founder & CEO | Passionate Entrepreneur | Management Graduate from Sacred Heart University",
    links: [
      {
        link: "mailto:mvberlingo@gmail.com",
        icon: mailicon,
      },
      {
        link: "https://www.linkedin.com/in/mblingo/",
        icon: linkedinicon,
      },
    ],
  },
  {
    name: "Anthony Ivanov",
    path: altimg,
    about: "CFO | Experienced Young Entrepreneur",
    links: [
      {
        link: "mailto:anthonyivanov00@gmail.com",
        icon: mailicon,
      },
      {
        link: "www.linkedin.com/in/anthony-ivanov",
        icon: linkedinicon,
      },
    ],
  },
  {
    name: "Nikshep A Kulli",
    path: nikshipimg,
    about:
      "CTO|Data Educator | Nurturing Minds in Data Structures, Text Analysis, MongoDB, and Data Science Architecture 🚀💻 | Passionate about Empowering Future Tech Leaders",
    links: [
      {
        link: "https://www.instagram.com/name_is_niku/",
        icon: instaicon,
      },
      {
        link: "mailto:nikshepkulli9@gmail.com",
        icon: mailicon,
      },
      {
        link: "https://www.linkedin.com/in/nikshepkulli/",
        icon: linkedinicon,
      },
      {
        link: "https://github.com/nikshepkulli",
        icon: githubicon,
      },
    ],
  },

  {
    name: "Venkata Sai Rohith",
    path: rohithimg,
    about: "Data Scientist | Expert in Deep Learning | Skilled Communicator",
    links: [
      {
        link: "https://www.instagram.com/",
        icon: instaicon,
      },
      {
        link: "mailto:andanala.rohith357@gmail.com",
        icon: mailicon,
      },
      {
        link: "https://www.linkedin.com/in/rohithandanala357/",
        icon: linkedinicon,
      },
      {
        link: "https://github.com/rohithandanala",
        icon: githubicon,
      },
    ],
  },

  {
    name: "#Your name",
    path: altimg, // Send image technical team for uploading
    about: "Type your description",
    links: [
      {
        link: "your social media link",
        icon: instaicon, // leave this icon for the technical team
      },
      {
        link: "your social media link 2",
        icon: mailicon, // leave this icon for the technical team
      },
      {
        link: "your social media link 3",
        icon: linkedinicon, // leave this icon for the technical team
      }, // Add new link if you have any more profiles
    ],
  },
];
