import App from "./app";

App.listen(App.get("port"), () => {
  console.log(`Pokédex API is listening on port ${App.get("port")}`);
});
