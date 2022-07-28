// form을 json으로
function formToJson(formTag){
    if(! formTag) return null
    if(formTag.tagName !== "FORM") return null
    const toJson = {};
    formTag.querySelectorAll("input").forEach((el) => {
        toJson[el.name] = el.value;
    })
    return toJson;
}