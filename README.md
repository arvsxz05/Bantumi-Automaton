## Bantumi

Created by: [Arvin Arbuis](https://github.com/arvsxz05), [Florwilyn Cayson](https://github.com/florwilyn), [Jan Santino Mandreza](https://github.com/Tilmo8)

Play it HERE -> https://bantumi.herokuapp.com/

Bantumi (known as Kalah in US) is a solved game in which each player manages each of his/her own six houses and strives to get as much seeds on his/her store as possible. These are the rules (Wikipedia):

1. At the beginning of the game, four seeds are placed in each house. This is the traditional method.
2. Each player controls the six houses and their seeds on the player's side of the board. The player's score is the number of seeds in the store to their right.
3. Players take turns sowing their seeds. On a turn, the player removes all seeds from one of the houses under their control. Moving counter-clockwise, the player drops one seed in each house in turn, including the player's own store but not their opponent's.
4. If the last sown seed lands in an empty house owned by the player, and the opposite house contains seeds, both the last seed and the opposite seeds are captured and placed into the player's store.
5. If the last sown seed lands in the player's store, the player gets an additional move. There is no limit on the number of moves a player can make in their turn.
6. When one player no longer has any seeds in any of their houses, the game ends. The other player moves all remaining seeds to their store, and the player with the most seeds in their store wins.

![Imgur](http://i.imgur.com/Xmin7v7.png)

The automaton can be applied in the game for determining the next move of the computer. It can take the current configurations of the number of seeds in the computer's and player's houses and its relative distance to the stores in order to get maximum number of possible moves and steals, thus, gaining higher chances of winning. The project now focuses on effective transition functions between the current configurations of the seeds and the next move of the computer opponent.