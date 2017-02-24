CREATE TABLE IF NOT EXISTS users (
    user_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(80) NOT NULL,
    password VARCHAR(512) NOT NULL,
    join_date TIMESTAMP
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS classes (
   class_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   owner_id BIGINT UNSIGNED NOT NULL,
   constraint constraint_1 FOREIGN KEY (owner_id) references users(user_id) on update cascade on delete cascade,
   class_name VARCHAR(60) NOT NULL,
   class_info VARCHAR(1000) NULL,
   class_times VARCHAR(1000) NOT NULL /* THIS'LL PROBABLY BE A FORMATTED STRING WITH DAYS AND TIMES*/
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS assignments (
    assignment_id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_id BIGINT UNSIGNED NOT NULL,
    constraint contraint_2 FOREIGN KEY (class_id) REFERENCES classes(class_id) ON UPDATE CASCADE ON DELETE CASCADE,
    assignment_name VARCHAR(100) NOT NULL,
    assignment_description VARCHAR(1000) NULL,
    assignment_due DATE NOT NULL
) ENGINE = InnoDB;

/*CREATE TABLE IF NOT EXISTS schedule (
    FOREIGN KEY (schedule_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE PRIMARY KEY,
    /*num_classes INT UNSIGNED NOT NULL,
    num_assignments INT UNSIGNED NOT NULL,*/
     
/*    
) ENGINE = InnoDB;
*/
