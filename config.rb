###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

data.publications.each do |type, publications|
  publications.each do |key, publication|
    proxy "/publications/#{key}.html",
          "/publications/template.html",
          locals: {
            publication: publication,
            type:        type,
            key:         key
          }, :ignore => true
  end
end

data.reviews.each do |key, reviews|
  reviews.each_with_index do |review, index|
    proxy "/review#{(index + 1).to_s.rjust(2, '0')}.html",
          "/reviews/template.html",
          locals: {
            review_image: "images/reviews/#{review}",
            review_number: (index + 1).to_s.rjust(2, '0')
          }, :ignore => true
  end
end

data.interviews.each do |key, interviews|
  interviews.each_with_index do |interview, index|
    proxy "/interview#{(index + 1).to_s.rjust(2, '0')}.html",
          "/interviews/template.html",
          locals: {
            interview_image: "images/interviews/#{interview}",
            interview_number: (index + 1).to_s.rjust(2, '0')
          }, :ignore => true
  end
end
# General configuration

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
