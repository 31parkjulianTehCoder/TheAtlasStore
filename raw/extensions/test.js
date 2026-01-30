class AtlasTest {
  getInfo() {
    return {
      id: 'AtlasTest',
      name: 'Atlas Test Extention',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Test'
        }
      ]
    };
  }

  hello() {
    return 'It works!!';
  }
}

Scratch.extensions.register(new AtlasTest());
