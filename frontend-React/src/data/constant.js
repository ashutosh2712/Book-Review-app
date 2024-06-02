import Flat from "../assets/flatland.png";
import Galaxy from "../assets/galaxy.png";
import Crime from "../assets/crime.png";
import Origin from "../assets/origin.png";
import Rich from "../assets/rich.png";
import Einstein from "../assets/einstein.png";
export const books = [
  {
    _id: 1,
    title: "Flatland A Romance of Many Dimensions",
    author: "Edwin Abbott",
    genre: "Fiction",
    description:
      "Flatland: A Romance of Many Dimensions is a satirical novella by the English schoolmaster Edwin Abbott Abbott, first published in 1884 by Seeley & Co. of London. Written pseudonymously by A Square the book used the fictional two-dimensional world of Flatland to comment on the hierarchy of Victorian culture, but the novella's more enduring contribution is its examination of dimensions",
    average_rating: 4.5,
    user_reviews: ["Great book", "Awsome Book"],
    image: Flat,
  },
  {
    _id: 2,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Fiction",
    description:
      "The Hitchhiker's Guide to the Galaxy is the first book in the Hitchhiker's Guide to the Galaxy comedy science fiction 'trilogy of five books' by Douglas Adams, with a sixth book written by Eoin Colfer. The novel is an adaptation of the first four parts of Adams's radio series of the same name, centering on the adventures of the only man to survive the destruction of Earth; while roaming outer space, he comes to learn the truth behind Earth's existence.",
    average_rating: 4.0,
    user_reviews: ["Great book", "Awsome Book", "Fabolous"],
    image: Galaxy,
  },
  {
    _id: 3,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Fiction",
    description:
      "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat. He theorises that with the money he could liberate himself from poverty and go on to perform great deeds, and seeks to convince himself that certain crimes are justifiable if they are committed in order to remove obstacles to the higher goals of 'extraordinary' men. Once the deed is done, however, he finds himself wracked with confusion, paranoia, and disgust. His theoretical justifications lose all their power as he struggles with guilt and horror and is confronted with both internal and external consequences of his deed.",
    average_rating: 3.5,
    user_reviews: ["Great book", "Awsome Book", "Marvalous"],
    image: Crime,
  },
  {
    _id: 4,
    title: "On the Origin of Species",
    author: "Charles Darwin",
    genre: "Non-Fiction",
    description:
      "Darwin's book introduced the scientific theory that populations evolve over the course of generations through a process of natural selection although Lamarckism was also included as a mechanism of lesser importance. The book presented a body of evidence that the diversity of life arose by common descent through a branching pattern of evolution. Darwin included evidence that he had collected on the Beagle expedition in the 1830s and his subsequent findings from research, correspondence, and experimentation.",
    average_rating: 5.0,
    user_reviews: ["Great book", "Awsome Book"],
    image: Origin,
  },
  {
    _id: 5,
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    genre: "Non-Fiction",
    description:
      "The Richest Man in Babylon is a 1926 book by George S. Clason that dispenses financial advice through a collection of parables set 4,097 years earlier, in ancient Babylon. The book remains in print almost a century after the parables were originally published, and is regarded as a classic of personal financial advice.",
    average_rating: 3.0,
    user_reviews: ["Great book", "Awsome Book", "Worth to read"],
    image: Rich,
  },
  {
    _id: 6,
    title: "Einstein",
    author: "Walter Isaacson",
    genre: "Non-Fiction",
    description:
      "The first full biography of Albert Einstein since all of his papers have become available a fully realised portrait of this extraordinary human being, and great genius.",
    average_rating: 3.0,
    user_reviews: ["Great book", "Awsome Book", "Worth to read"],
    image: Einstein,
  },
];

export const users = [
  { _id: 1, username: "brock", email: "brock@gmail.com", password: "123" },
];
