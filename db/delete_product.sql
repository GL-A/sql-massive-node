delete from projects
  where id = $1
  returning *;
