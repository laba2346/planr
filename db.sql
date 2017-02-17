create table if not exists `users` (
`id` bigint(1) not null auto_increment,
`name` varchar(200) not null,
`email` varchar(50) not null,
`password` varchar(512) not null,
 primary key (`id`)
);

create table if not exists `assignments` (
`id` bigint(1) not null auto_increment,
`class_id` bigint(1),
 primary key (`id`)
);

create table if not exists `contributors` (
`user_id` bigint(1) not null,
`assignment_id` bigint(1) not null
);
