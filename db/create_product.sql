insert into projects (Name, Description, Price, ImageUrl)
  values ($1, $2, $3, $4)
  RETURNING *;
