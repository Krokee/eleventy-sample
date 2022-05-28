---
title: We are now using Markdown
layout: "base.njk"
---

## Hello Jamstack

Lorem ipsum [dolor](http://google.fr), sit amet consectetur adipisicing elit. Commodi laudantium sunt maxime? Perspiciatis excepturi incidunt autem atque! Voluptatem, ipsa harum! Labore, ut officiis minus libero sequi aspernatur dolores aperiam recusandae!

And trying the hot reload. And testing deployment on Netlify. The title of the page is "{{ title }}"

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}
