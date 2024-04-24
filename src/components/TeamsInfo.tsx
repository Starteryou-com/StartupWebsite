import rohithimg from "../assets/team/rohith.jpg";
import instaicon from "../assets/team/insta.jpg";
import mailicon from "../assets/team/mailicon.png";
import linkedinicon from "../assets/team/linkedinicon.jpg";
import githubicon from "../assets/team/githubicon.jpg";

export const members = [
  {
    name: "Venkata Sai Rohith",
    path: rohithimg,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, s",
    links: [
      {
        link: "https://www.instagram.com/",
        icon: instaicon,
      },
      {
        link: "https://www.google.com/gmail/about/",
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
    name: "Anjali singh",
    about: "Lorem ipsum dolor sit amet, etur adipiscing elit, s",
    links: [
      {
        link: "https://www.instagram.com/",
        icon: instaicon,
      },
    ],
  },
  {
    name: "bhardwaj",
    about: "Lorem ipsum dolor skdl[qit amet,  etur adipiscing elit, s",
    links: [
      {
        link: "https://www.instagram.com/",
        icon: instaicon,
      },
      {
        link: "https://www.instagram.com/",
        icon: mailicon,
      },
    ],
  },
  {
    name: "#Your name",
    path: rohithimg, // Send image technical team for uploading
    about: "Type your description",
    links: [
      {
        link: "your scocial media link",
        icon: instaicon, // leave this icon for technical team
      },
      {
        link: "your social media link 2",
        icon: mailicon, // leave this icon for technical team
      },
      {
        link: "your social media link 3",
        icon: linkedinicon, // leave this icon for technical team
      }, // Add new link if you have any more profiles
      
    ],
  },
];
