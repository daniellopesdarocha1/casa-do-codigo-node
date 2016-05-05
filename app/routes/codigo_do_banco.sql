/*código do banco mysql*/

create database casadocodigo_nodejs;

use casadocodigo_nodejs;

create table livros (
	id int(11) not null primary key auto_increment,
	titulo varchar (255),
	descricao text,
	preco decimal(10,2)
);

insert into livros values (73, 'Começando com nodejs', 'livro sobre nodejs', 40.00);
insert into livros values (74, 'Começando com javascript', 'livro sobre javascript', 40.00);
insert into livros values (75, 'Começando com express', 'livro sobre express', 40.00);
insert into livros values (76, 'Indo alem com javascript', 'javascript avancado', 39.90);
