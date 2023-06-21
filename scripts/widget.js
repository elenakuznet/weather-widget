import  { startWidget }  from "./modules/widgetService.js";

const initWidget = (app) => {
    const widget = startWidget();
    console.log(app);
    app.append(widget);
    console.log(widget);
}

initWidget(document.querySelector('#app'));