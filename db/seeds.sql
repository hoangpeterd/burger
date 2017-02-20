USE burgers_db;

DELETE FROM burgers;

ALTER TABLE products AUTO_INCREMENT = 1;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Big Mac", false)
, ("Whopper", true)
, ("Baconator", true);

SELECT * FROM burgers;
