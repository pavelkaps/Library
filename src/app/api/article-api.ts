import { GUID } from '../additional/GUID'
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemoryArticleService implements InMemoryDbService {
  createDb() {
    let articles = [
        { 
            id: GUID.generate(),
            title: 'Angular Web', 
            author: 'John',
            date: new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta sapien eget tincidunt blandit. Integer a elit justo. Ut eget bibendum velit. Proin sem mi, convallis et ipsum a, vulputate venenatis sem.',
            imageUrl: 'http://blog.stoneriverelearning.com/wp-content/uploads/2016/08/A2.jpg'
        },
        { 
            id: GUID.generate(),
            title: 'JavaScript', 
            author: 'John',
            date: new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta sapien eget tincidunt blandit. Integer a elit justo. Ut eget bibendum velit. Proin sem mi, convallis et ipsum a, vulputate venenatis sem.',
            imageUrl: 'https://proglib.io/wp-content/uploads/2017/03/xz55s4v5m21mphibapiv.png'
        },
        { 
            id: GUID.generate(),
            title: 'WebPack', 
            author: 'John',
            date: new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta sapien eget tincidunt blandit. Integer a elit justo. Ut eget bibendum velit. Proin sem mi, convallis et ipsum a, vulputate venenatis sem.',
            imageUrl: 'http://www.sdblog.ru/wp-content/uploads/2017/02/webpack.jpg'
        },
        { 
            id: GUID.generate(),
            title: 'Gulp', 
            author: 'John',
            date: new Date(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta sapien eget tincidunt blandit. Integer a elit justo. Ut eget bibendum velit. Proin sem mi, convallis et ipsum a, vulputate venenatis sem.',
            imageUrl: 'http://codehangar.io/content/images/2015/10/gulp-logo.jpg'
        },
    ];
    return { articles };
  }
}