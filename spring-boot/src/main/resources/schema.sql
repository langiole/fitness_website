CREATE TABLE Users(
	user_id int AUTO_INCREMENT PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(62) NOT NULL,
    password varchar(50) NOT NULL,
	date_registered date NOT NULL
);

CREATE TABLE Exercises(
	exercise_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    description varchar(1000) DEFAULT NULL,
    primary_muscle varchar(50) NOT NULL,
    secondary_muscle varchar(50) DEFAULT NULL,
    video_link varchar(500) DEFAULT NULL    
);

CREATE TABLE SavedExercises(
	user_id int,
	exercise_id int,
    foreign key(user_id) references Users(user_id),
    foreign key(exercise_id) references Exercises(exercise_id)
);