const express = require('express')
const randomRouter = express.Router()

const randomWordsArray = [
    'grateful',
    'muscle',
    'abundant',
    'wander',
    'poison',
    'waste',
    'outgoing',
    'reason',
    'overt',
    'dizzy',
    'fade',
    'sturdy',
    'highfalutin',
    'ablaze',
    'reject',
    'language',
    'scorch',
    'bucket',
    'suit',
    'ludicrous',
    'excuse',
    'like',
    'describe',
    'obscene',
    'lying',
    'sort',
    'sea',
    'search',
    'idea',
    'straight',
    'mellow',
    'vanish',
    'free',
    'adaptable',
    'onerous',
    'wine',
    'handy',
    'torpid',
    'minor',
    'preserve',
    'terrify',
    'wealthy',
    'uttermost',
    'drawer',
    'skip',
    'permit',
    'elated',
    'frighten',
    'lip',
    'birth',
    
    'pleasant',
    'absent',
    'hook',
    'wrap',
    'promise',
    'grain',
    'barbarous',
    'mark',
    'beds',
    'rob',
    'drink',
    'comparison',
    'synonymous',
    'fix',
    'finicky',
    'burst',
    'unbiased',
    'screw',
    'end',
    'request',
    'rabid',
    'building',
    'confuse',
    'elite',
    'knot',
    'pot',
    'rule',
    'scared',
    'attractive',
    'steadfast',
    'shrill',
    'youthful',
    'tedious',
    'weigh',
    'position',
    'dance',
    'ordinary',
    'refuse',
    'add',
    'maddening',
    'songs',
    'bare',
    'tasteless',
    'glamorous',
    'filthy',
    'chilly',
    'sisters',
    'daffy',
    'debt',
    'doubt',
    'bow',
    'haircut',
    'quarrelsome',
    'wave',
    'stew',
    'vast',
    'flame',
    'record',
    'nippy',
    'shoes',
    'cry',
    'scarecrow',
    'wry',
    'nifty',
    'electric',
    'snail',
    'average',
    'brick',
    'precious',
    'prickly',
    'political',
    'night',
    'jittery',
    'brash',
    'cook',
    'didactic',
    'view',
    'three',
    'same',
    'disastrous',
    'lunch',
    'uneven',
    'chickens',
    'uninterested',
    'drop',
    'store',
    'expert',
    'funny',
    'thundering',
    'impress',
    'window',
    'cooing',
    'obsequious',
    'hospitable',
    'bustling',
    'veil',
    'cheerful',
    'friendly',
    'interfere',
    'hollow',
    'smooth',
    'hall',
    'volcano',
    'windy',
    'arch',
    'sophisticated',
    'string',
    'ready',
    'face',
    'dashing',
    'volleyball',
    'effect',
    'shock',
    'charge',
    'actor',
    'dusty',
    'careless',
    'aftermath',
    'vacuous',
    'parcel',
    'sigh',
    'swing',
    'envious',
    'accessible',
    'drum',
    'cowardly',
    'mom',
    'incredible',
    'selfish',
    'nice',
    'roof',
    'idiotic',
    'pin',
    'five',
    'rifle',
    'adjoining',
    'wait',
    'mind',
    'trip',
    'competition',
    'letters',
    'road',
    'messy',
    'humor',
    'stupid',
    'fluffy',
    'bridge',
    'undesirable',
    'snails',
    'shiver',
    'harbor',
    'spiffy',
    'secret',
    'force',
    'low',
    'walk',
    'best',
    'encourage',
    'grey',
    'rot',
    'stick',
    'tin',
    'energetic',
    'repulsive',
    'absurd',
    'mend',
    'word',
    'ground',
    'whirl',
    'foolish',
    'plough',
    'needy',
    'proud',
    'resolute',
    'wipe',
    'street',
    'lush',
    'cast',
    'observation',
    'awful',
    'high-pitched',
    'ritzy',
    'obtain',
    'wacky',
    'reaction',
    'ghost',
    'lick',
    'late',
    'fortunate',
    'rail',
    'innate',
    'zippy',
    'suggestion',
    'placid',
    'reply',
    'mountainous',
    'profuse',
    'guard',
    'dog',
    'picayune',
    'answer',
    'married',
    'male',
    'chance',
    'provide',
    'whispering',
    'cat',
    'blushing',
    'huge',
    'hanging',
    'unwieldy',
    'clear',
    'axiomatic',
    'moan',
    'box',
    'airport',
    'various',
    'calculating',
    'shade',
    'remain',
    'fretful',
    'jellyfish',
    'cuddly',
    'abashed',
    'post',
    'brief',
    'grumpy',
    'anxious',
    'deliver',
    'classy',
    'fire',
    'crown',
    'toy',
    'side',
    'insect',
    'aromatic',
    'thankful',
    'painstaking',
    'notebook',
    'skirt',
    'print',
    'eight',
    'mate',
    'daily',
    'sudden',
    'consider',
    'pancake',
    'spring',
    'moldy',
    'approve',
    'governor',
    'fry',
    'fetch',
    'growth',
    'wink',
    'sheet',
    'quick',
    'easy',
    'relation',
    'substance',
    'girls',
    'polish',
    'imminent',
    'crooked',
    'bloody',
    'oven',
    'load',
    'fit',
    'ethereal',
    'overflow',
    'defiant',
    'extra-small',
    'quiet',
    'makeshift',
    'cakes',
    'mere',
    'auspicious',
    'cause',
    'slave',
    'cable',
    'expensive',
    'outrageous',
    'chess',
    'cent',
    'boat',
    'abiding',
    'handsomely',
    'melt',
    'rabbit',
    'snotty',
    'yak',
    'subsequent',
    'partner',
    'jar',
    'offer',
    'elegant',
    'chop',
    'limit',
    'royal',
    'lavish',
    'grade',
    'work',
    'bed',
    'rake',
    'remind',
    'divide',
    'liquid',
    'alive',
    'questionable',
    'claim',
    'unruly',
    'picture',
    'opposite',
    'pen',
    'rude',
    'boorish',
    'challenge',
    'excellent',
    'ray',
    'whine',
    'horn',
    'gentle',
    'sound',
    'flat',
    'knowledgeable',
    'defective',
    'unique',
    'flippant',
    'unadvised',
    'stale',
    'overjoyed',
    'wonder',
    'beg',
    'agonizing',
    'sip',
    'suggest',
    'lackadaisical',
    'form',
    'thunder',
    'brawny',
    'ancient',
    'dislike',
    'hospital',
    'one',
    'water',
    'zephyr',
    'strange',
    'applaud',
    'system',
    'even',
    'rod',
    'meddle',
    'committee',
    'gainful',
    'cheer',
    'crawl',
    'scintillating',
    'team',
    'tacky',
    'taboo',
    'fertile',
    'furtive',
    'tangible',
    'grandiose',
    'mice',
    'title',
    'invention',
    'macabre',
    'toe',
    'little',
    'ill-informed',
    'honey',
    'chew',
    'influence',
    'touch',
    'polite',
    'tidy',
    'faithful',
    'unite',
    'encouraging',
    'class',
    'poke',
    'pail',
    'physical',
    'gratis',
    'risk',
    'quaint',
    'structure',
    'shaky',
    'giraffe',
    'grate',
    'quartz',
    'determined',
    'pushy',
    'long-term',
    'productive',
    'prepare',
    'cautious',
    'front',
    'tail',
    'switch',
    'chunky',
    'combative',
    'confused',
    'fat',
    'exclusive',
    'earthy',
    'threatening',
    'test',
    'knife',
    'death',
    'tiresome',
    'yielding',
    'year',
    'stitch',
    'numerous',
    'pigs',
    'van',
    'incandescent',
    'tent',
    'frogs',
    'broad',
    'decision',
    'tart',
    'magic',
    'imagine',
    'flower',
    'cynical',
    'earth',
    'eye',
    'gruesome',
    'file',
    'dirty',
    'kitty',
    'stir',
    'wide',
    'vague',
    'tangy',
    'oil',
    'head',
    'carry',
    'clam',
    'rub',
    'kick',
    'typical',
    'pop',
    'arrogant',
    'spooky',
    'scrawny',
    'overwrought',
]



randomRouter.get("/", async (req, res) => {

    try {
        const randomInt = Math.floor(Math.random() * randomWordsArray.length)
        res.send(randomWordsArray[randomInt])

    } catch (err) {
        console.log(err)
        res.status(404).send({
            message : 'Something went wrong',
            status : false
        })
    }

})

module.exports = { randomRouter }