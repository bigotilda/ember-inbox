export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/inboxes', function () {
    return {
      data: [
        {
          type: 'inboxes',
          id: 1,
          attributes: {
            key: '1',
            subject: 'Pied Piper beta invite',
            body: 'You can totally have one of my invites. In A.D. 2101, war was beginning. Captain: What happen? Mechanic: Somebody set us up the bomb.',
            from: 'Dinesh',
            active: true
          }
        },
        {
          type: 'inboxes',
          id: 2,
          attributes: {
            key: '2',
            subject: 'Enlarge your brain by 3 inches',
            body: 'With this pills unapproved by the FDA! You have no chance to survive make your time.',
            from: 'LegitimateBusinessman'
          }
        },
        {
          type: 'inboxes',
          id: 3,
          attributes: {
            key: '3',
            subject: 'FW: Hot internet garbage',
            body: 'something something something memes. Takeoff every ZIG for great justice!',
            from: 'Redditor'
          }
        },
        {
          type: 'inboxes',
          id: 4,
          attributes: {
            key: '4',
            subject: 'Pure junk',
            body: 'Uhhhhhhh All your base are belong to us.',
            from: 'SpamArtist'
          }
        }
      ]
    };
  });
}
