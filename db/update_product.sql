update projects
set
  name = coalesce($2, name),
  description = coalesce($3, name),
  price = coalesce($4, price),
  imageurl = coalesce($5, name)

where id = $1
RETURNING *;
