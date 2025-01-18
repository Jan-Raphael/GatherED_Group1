const posts = [
  {
    title: "Introduction to Python Programming",
    tags: ["Python", "Programming", "Beginners"],
    author: "Trisha",
    isPremium: false,
    price: null,
    actions: [
      { type: "vote", label: "Upvote", icon: "none" },
      { type: "vote", label: "Downvote", icon: "none" }
    ]
  },
  {
    title: "Mastering Machine Learning (Premium)",
    tags: ["Machine Learning", "AI"],
    author: "Josh",
    isPremium: true,
    price: "$5.99",
    actions: [
      { type: "buy", label: "Buy Now", icon: null }
    ]
  },
  {
    title: "Introduction to Python Programming",
    tags: ["Python", "Programming", "Beginners"],
    author: "Trisha",
    isPremium: false,
    price: null,
    actions: [
      { type: "vote", label: "Upvote", icon: "none" },
      { type: "vote", label: "Downvote", icon: "none" }
    ]
  },
];

export default posts;