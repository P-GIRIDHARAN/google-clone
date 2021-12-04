const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;
  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&sxsrf=AOaemvLKzupNszCbj16nmtQttjZOPzOyxQ%3A1638608891265&ei=-y-rYYvRD9GbseMP0fS5yAs&ved=0ahUKEwjLuo7n5cn0AhXRTWwGHVF6DrkQ4dUDCA4&uact=5&oq=" +
    input +
    "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBggAEAoQQzIECAAQQzIECC4QQzIICAAQgAQQsQMyCgguEMcBENEDEEMyBAguEEMyBQguEIAEMgUILhCABDIICAAQgAQQsQM6BwgAEEcQsAM6BwgAELADEEM6CgguEMgDELADEENKBAhBGABQzARYzARgyQZoAXACeACAAWeIAWeSAQMwLjGYAQCgAQHIAQzAAQE&sclient=gws-wiz";
}
