var CalvaryComics = CalvaryComics || {};

CalvaryComics.books = {
  init: function(base_path) {
    var self = this;
    image_number = 0;
    $.each($("#preview_images span"), function() {
      self.images.push($(this).attr("data-image-name"))
    });
    $("#current-image img").attr("src", base_path + CalvaryComics.books.images[0]);
    $("#previous-button").click(function(e) {
      e.preventDefault();
      self.calculate_previous();
      self.update_image_title(image_number);
      self.update_image_src(base_path, image_number);
    });
    $("#next-button").click(function(e) {
      e.preventDefault();
      self.calculate_next();
      self.update_image_title(image_number);
      self.update_image_src(base_path, image_number);
    });
  },
  images: [],
  calculate_previous: function() {
    image_number = image_number - 1;
    if(image_number < 0) {
      image_number = this.images.length - 1;
    };
  },
  calculate_next: function() {
    image_number = image_number + 1;
    if(image_number > this.images.length - 1) {
      image_number = 0;
    }
  },
  update_image_title: function(img_num) {
    var image_title;
    if(img_num == 0) {
      image_title =  "Front Cover"
    }
    else if(img_num == this.images.length - 1) {
      image_title = "Back Cover"
    }
    else {
      image_title = "Page " + img_num.toString();
    }
    $("#current-image-title").html(image_title)
  },
  update_image_src: function(base_path, img_num) {
    $("#current-image img").attr("src", base_path + this.images[img_num]);
  },
};
