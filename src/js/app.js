import Character from './character';
import Team from './team';

const team = new Team();

team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
team.add(new Character('Мечник', 'Swordsman', 60, 1, 35, 15));
team.add(new Character('Маг', 'Magician', 40, 1, 45, 5));

const characters = [];
for (const character of team) {
  characters.push(character);
}
