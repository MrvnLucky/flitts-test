SELECT
  A.ID,
  A.UserName,
  B.UserName AS ParentUserName
FROM 
  User A
LEFT JOIN
  User B
ON
  A.Parent = B.ID
ORDER BY ID
