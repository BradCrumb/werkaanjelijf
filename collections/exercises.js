ExerciseCollection = new Mongo.Collection("exercise");

if (Meteor.isServer) {
    if (ExerciseCollection.find({}).count() === 0) {
        ExerciseCollection.insert({
            'translation': 'ru_RU',
            'value1': 'translation1',
            'value2': 'translation2'
        });
        ExerciseCollection.insert({
            'translation': 'en_US',
            'value1': 'translation1',
            'value2': 'translation2'
        });
    }
}