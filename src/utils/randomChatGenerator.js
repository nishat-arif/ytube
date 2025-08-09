    
const nameList = [
                'Time','Past','Future','Dev',
                'Fly','Flying','Soar','Soaring','Power','Falling',
                'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
                'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
                'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
                'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
                'Mine','Your','Worst','Enemy','Hostile','Force','Video',
                'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
                'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
                'Script','Writer','Near','Close','Open','Cube','Circle',
                'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
                'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
                'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
                'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
                'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
                'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
                'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
                'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
                'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
                'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
                'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
            ];

const messages = [
                "You are capable of amazing things.",
                "Believe in yourself and all that you are.",
                "The only way to do great work is to love what you do.",
                "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "The future belongs to those who believe in the beauty of their dreams."
                ];


export function generateMessage() {
                    // Get a random index from the messages array
                    const randomIndex = Math.floor(Math.random() * messages.length);

                    // Return the message at the random index
                    return messages[randomIndex];
}


export function generateName() {
               return nameList[Math.floor( Math.random() * nameList.length )];

            };
        

        
            