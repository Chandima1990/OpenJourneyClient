import midjourney from 'midjourney-client';

export class Run {

    options = {
        width: 1024,
        heightt: 768,
        num_outputs: 1,
    }

    constructor() { }

    async run() {

        var response = await midjourney('mdjrny-v4 style portrait of female elf, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k.', this.options);

        console.log(response);
    }
}

new Run().run();