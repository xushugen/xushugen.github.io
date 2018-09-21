const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "一百个可能",
        artist: 'christine welch',
        url: 'http://www.ytmp3.cn/down/53157.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/26.jpg',
      },
      {
        name: '醉千年',
        artist: '李袁杰/李俊佑',
        url: 'http://www.ytmp3.cn/down/52570.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/23.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});