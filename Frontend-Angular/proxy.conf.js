const my_proxy = [
  {
    context: ["/api"],
    target: "http://localhost:8080/",
    secure: false,
    logLevel: "debug",
  },
];
module.exports = my_proxy;
