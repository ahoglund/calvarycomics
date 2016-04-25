var CalvaryComics = CalvaryComics || {};

CalvaryComics.books = {
  init: function(base_path, image_numbers) {
    image_number = 0;
    CalvaryComics.books.setup_image_map(
      base_path,
      image_numbers
    );
    console.log(CalvaryComics.books.image_map);
    $("#current-image img").attr("src", CalvaryComics.books.image_map[0].path);
    $("#previous-button").click(function(e) {
      e.preventDefault();
      CalvaryComics.books.calculate_previous();
      CalvaryComics.books.update_image_title(image_number);
      CalvaryComics.books.update_image_src(image_number);
    });
    $("#next-button").click(function(e) {
      e.preventDefault();
      CalvaryComics.books.calculate_next();
      CalvaryComics.books.update_image_title(image_number);
      CalvaryComics.books.update_image_src(image_number);
    });
  },
  image_map: [],
  setup_image_map: function(base_path, image_numbers) {
    var first = image_numbers.shift();
    var last  = image_numbers.pop();
    CalvaryComics.books.setup_image_object(base_path, first, "Front Cover");
    CalvaryComics.books.setup_image_object(base_path, last, "Back Cover");
    $.each(image_numbers, function(index, value) {
      CalvaryComics.books.setup_image_object(base_path, value, "Page " + value.toString());
    });
  },
  setup_image_object: function(base_path, number, name) {
    CalvaryComics.books.image_map[number]           = new Object();
    CalvaryComics.books.image_map[number]["title"]  = name;
    CalvaryComics.books.image_map[number]["path"]   = base_path + number.toString() + ".jpg";
  },
  calculate_previous: function() {
    image_number = image_number - 1;
    if(image_number < 0) {
      image_number = CalvaryComics.books.image_map.length - 1;
    };
  },
  calculate_next: function() {
    image_number = image_number + 1;
    if(image_number > CalvaryComics.books.image_map.length - 1) {
      image_number = 0;
    }
  },
  update_image_title: function(img_num) {
    $("#current-image-title").html(CalvaryComics.books.image_map[img_num].title)
  },
  update_image_src: function(img_num) {
    $("#current-image img").attr("src", CalvaryComics.books.image_map[img_num].path);
  },
};
