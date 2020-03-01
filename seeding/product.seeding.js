require('dotenv').config();

var Product = require('../models/product.model');
var mongoose = new require('mongoose');
mongoose.connect('mongodb://localhost/express-demo', { useNewUrlParser: true, useUnifiedTopology: true });
var products = [
    new Product({
        'name': 'Jam - Raspberry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa'
    }), new Product({
        'name': 'Pepper - Chili Powder',
        'image': 'https://loremflickr.com/320/240',
        'description': 'quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at'
    }), new Product({
        'name': 'Mushroom - King Eryingii',
        'image': 'https://loremflickr.com/320/240',
        'description': 'molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus'
    }), new Product({
        'name': 'Compound - Strawberry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit'
    }), new Product({
        'name': 'Green Tea Refresher',
        'image': 'https://loremflickr.com/320/240',
        'description': 'duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at'
    }), new Product({
        'name': 'Lettuce - Red Leaf',
        'image': 'https://loremflickr.com/320/240',
        'description': 'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta'
    }), new Product({
        'name': 'Butter - Unsalted',
        'image': 'https://loremflickr.com/320/240',
        'description': 'pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit'
    }), new Product({
        'name': 'Soup - Knorr, Chicken Noodle',
        'image': 'https://loremflickr.com/320/240',
        'description': 'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida'
    }), new Product({
        'name': 'Hog / Sausage Casing - Pork',
        'image': 'https://loremflickr.com/320/240',
        'description': 'odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est'
    }), new Product({
        'name': 'Fish - Atlantic Salmon, Cold',
        'image': 'https://loremflickr.com/320/240',
        'description': 'imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet'
    }), new Product({
        'name': 'Wine - Cousino Macul Antiguas',
        'image': 'https://loremflickr.com/320/240',
        'description': 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan'
    }), new Product({
        'name': 'Rum - Coconut, Malibu',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit'
    }), new Product({
        'name': 'Broccoli - Fresh',
        'image': 'https://loremflickr.com/320/240',
        'description': 'phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla'
    }), new Product({
        'name': 'Longos - Cheese Tortellini',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis'
    }), new Product({
        'name': 'Sansho Powder',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat'
    }), new Product({
        'name': 'Sauce - Soya, Light',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede'
    }), new Product({
        'name': 'Chicken - Ground',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at'
    }), new Product({
        'name': 'Cheese - Perron Cheddar',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit'
    }), new Product({
        'name': 'Tea - Jasmin Green',
        'image': 'https://loremflickr.com/320/240',
        'description': 'turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque'
    }), new Product({
        'name': 'Soup - Campbells, Classic Chix',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero'
    }), new Product({
        'name': 'Chocolate - White',
        'image': 'https://loremflickr.com/320/240',
        'description': 'in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed'
    }), new Product({
        'name': 'Mahi Mahi',
        'image': 'https://loremflickr.com/320/240',
        'description': 'consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio'
    }), new Product({
        'name': 'Butter Ripple - Phillips',
        'image': 'https://loremflickr.com/320/240',
        'description': 'morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus'
    }), new Product({
        'name': 'Lettuce - Red Leaf',
        'image': 'https://loremflickr.com/320/240',
        'description': 'consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices'
    }), new Product({
        'name': 'Duck - Fat',
        'image': 'https://loremflickr.com/320/240',
        'description': 'pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula'
    }), new Product({
        'name': 'Liqueur Banana, Ramazzotti',
        'image': 'https://loremflickr.com/320/240',
        'description': 'maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas'
    }), new Product({
        'name': 'Table Cloth 53x53 White',
        'image': 'https://loremflickr.com/320/240',
        'description': 'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla'
    }), new Product({
        'name': 'Bread - White, Sliced',
        'image': 'https://loremflickr.com/320/240',
        'description': 'orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis'
    }), new Product({
        'name': 'Cheese - Perron Cheddar',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra'
    }), new Product({
        'name': 'Hold Up Tool Storage Rack',
        'image': 'https://loremflickr.com/320/240',
        'description': 'morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet'
    }), new Product({
        'name': 'Duck - Whole',
        'image': 'https://loremflickr.com/320/240',
        'description': 'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere'
    }), new Product({
        'name': 'Muffin - Bran Ind Wrpd',
        'image': 'https://loremflickr.com/320/240',
        'description': 'libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus'
    }), new Product({
        'name': 'Pop - Club Soda Can',
        'image': 'https://loremflickr.com/320/240',
        'description': 'at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante'
    }), new Product({
        'name': 'Island Oasis - Raspberry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi'
    }), new Product({
        'name': 'Cape Capensis - Fillet',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend'
    }), new Product({
        'name': 'Wasabi Paste',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris'
    }), new Product({
        'name': 'Gin - Gilbeys London, Dry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio'
    }), new Product({
        'name': 'Oil - Coconut',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa'
    }), new Product({
        'name': 'Coconut Milk - Unsweetened',
        'image': 'https://loremflickr.com/320/240',
        'description': 'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam'
    }), new Product({
        'name': 'Pepper - Green Thai',
        'image': 'https://loremflickr.com/320/240',
        'description': 'bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit'
    }), new Product({
        'name': 'Pepper - Chipotle, Canned',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi'
    }), new Product({
        'name': 'Crackers - Melba Toast',
        'image': 'https://loremflickr.com/320/240',
        'description': 'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non'
    }), new Product({
        'name': 'Pastrami',
        'image': 'https://loremflickr.com/320/240',
        'description': 'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce'
    }), new Product({
        'name': 'Wine - Cotes Du Rhone Parallele',
        'image': 'https://loremflickr.com/320/240',
        'description': 'luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper'
    }), new Product({
        'name': 'The Pop Shoppe - Black Cherry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam'
    }), new Product({
        'name': 'Mushroom - Crimini',
        'image': 'https://loremflickr.com/320/240',
        'description': 'elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus'
    }), new Product({
        'name': 'Toamtoes 6x7 Select',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus'
    }), new Product({
        'name': 'Sprite, Diet - 355ml',
        'image': 'https://loremflickr.com/320/240',
        'description': 'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam'
    }), new Product({
        'name': 'Broom - Push',
        'image': 'https://loremflickr.com/320/240',
        'description': 'feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl'
    }), new Product({
        'name': 'Wine - Wyndham Estate Bin 777',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit'
    }), new Product({
        'name': 'Squash - Sunburst',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam'
    }), new Product({
        'name': 'Sausage - Blood Pudding',
        'image': 'https://loremflickr.com/320/240',
        'description': 'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla'
    }), new Product({
        'name': 'Pasta - Lasagna Noodle, Frozen',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis'
    }), new Product({
        'name': 'Cheese Cloth No 100',
        'image': 'https://loremflickr.com/320/240',
        'description': 'id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo'
    }), new Product({
        'name': 'Vinegar - Balsamic, White',
        'image': 'https://loremflickr.com/320/240',
        'description': 'praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus'
    }), new Product({
        'name': 'Sour Puss Sour Apple',
        'image': 'https://loremflickr.com/320/240',
        'description': 'non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis'
    }), new Product({
        'name': 'Anchovy In Oil',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat'
    }), new Product({
        'name': 'Soup - Knorr, Ministrone',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel'
    }), new Product({
        'name': 'Jolt Cola - Electric Blue',
        'image': 'https://loremflickr.com/320/240',
        'description': 'nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque'
    }), new Product({
        'name': 'Cheese - Cheddar, Mild',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque'
    }), new Product({
        'name': 'Piping - Bags Quizna',
        'image': 'https://loremflickr.com/320/240',
        'description': 'in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis'
    }), new Product({
        'name': 'Ice Cream - Life Savers',
        'image': 'https://loremflickr.com/320/240',
        'description': 'dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat'
    }), new Product({
        'name': 'Rabbit - Saddles',
        'image': 'https://loremflickr.com/320/240',
        'description': 'congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio'
    }), new Product({
        'name': 'Chips - Doritos',
        'image': 'https://loremflickr.com/320/240',
        'description': 'porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce'
    }), new Product({
        'name': 'Pie Box - Cello Window 2.5',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim'
    }), new Product({
        'name': 'Sauce - Black Current, Dry Mix',
        'image': 'https://loremflickr.com/320/240',
        'description': 'dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat'
    }), new Product({
        'name': 'Beef - Ox Tail, Frozen',
        'image': 'https://loremflickr.com/320/240',
        'description': 'potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis'
    }), new Product({
        'name': 'Dried Peach',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin'
    }), new Product({
        'name': 'Chicken - Ground',
        'image': 'https://loremflickr.com/320/240',
        'description': 'felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing'
    }), new Product({
        'name': 'Dried Peach',
        'image': 'https://loremflickr.com/320/240',
        'description': 'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec'
    }), new Product({
        'name': 'Bar - Granola Trail Mix Fruit Nut',
        'image': 'https://loremflickr.com/320/240',
        'description': 'luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien'
    }), new Product({
        'name': 'Tea - Herbal - 6 Asst',
        'image': 'https://loremflickr.com/320/240',
        'description': 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac'
    }), new Product({
        'name': 'Cheese - Boursin, Garlic / Herbs',
        'image': 'https://loremflickr.com/320/240',
        'description': 'et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros'
    }), new Product({
        'name': 'Contreau',
        'image': 'https://loremflickr.com/320/240',
        'description': 'cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque'
    }), new Product({
        'name': 'Wine - White, Ej Gallo',
        'image': 'https://loremflickr.com/320/240',
        'description': 'morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede'
    }), new Product({
        'name': 'Icecream Bar - Del Monte',
        'image': 'https://loremflickr.com/320/240',
        'description': 'sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst'
    }), new Product({
        'name': 'Chips - Potato Jalapeno',
        'image': 'https://loremflickr.com/320/240',
        'description': 'justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla'
    }), new Product({
        'name': 'Mushroom - Chanterelle, Dry',
        'image': 'https://loremflickr.com/320/240',
        'description': 'turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in'
    }), new Product({
        'name': 'Onions - Cippolini',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia'
    }), new Product({
        'name': 'Pepper - Gypsy Pepper',
        'image': 'https://loremflickr.com/320/240',
        'description': 'congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in'
    }), new Product({
        'name': 'Basil - Primerba, Paste',
        'image': 'https://loremflickr.com/320/240',
        'description': 'at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum'
    }), new Product({
        'name': 'Urban Zen Drinks',
        'image': 'https://loremflickr.com/320/240',
        'description': 'posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi'
    }), new Product({
        'name': 'Cactus Pads',
        'image': 'https://loremflickr.com/320/240',
        'description': 'ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam'
    }), new Product({
        'name': 'Sauce - Rosee',
        'image': 'https://loremflickr.com/320/240',
        'description': 'molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in'
    }), new Product({
        'name': 'Pears - Bosc',
        'image': 'https://loremflickr.com/320/240',
        'description': 'aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque'
    }), new Product({
        'name': 'Yogurt - Assorted Pack',
        'image': 'https://loremflickr.com/320/240',
        'description': 'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi'
    }), new Product({
        'name': 'Relish',
        'image': 'https://loremflickr.com/320/240',
        'description': 'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget'
    }), new Product({
        'name': 'Veal - Provimi Inside',
        'image': 'https://loremflickr.com/320/240',
        'description': 'donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices'
    }), new Product({
        'name': 'Truffle Cups - White Paper',
        'image': 'https://loremflickr.com/320/240',
        'description': 'duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio'
    }), new Product({
        'name': 'Mustard - Dry, Powder',
        'image': 'https://loremflickr.com/320/240',
        'description': 'et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut'
    }), new Product({
        'name': 'Coffee - Flavoured',
        'image': 'https://loremflickr.com/320/240',
        'description': 'accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a'
    }), new Product({
        'name': 'Pepper - Paprika, Spanish',
        'image': 'https://loremflickr.com/320/240',
        'description': 'quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere'
    }), new Product({
        'name': 'Flour Dark Rye',
        'image': 'https://loremflickr.com/320/240',
        'description': 'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse'
    }), new Product({
        'name': 'Juice - Orange, Concentrate',
        'image': 'https://loremflickr.com/320/240',
        'description': 'neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum'
    }), new Product({
        'name': 'Mudslide',
        'image': 'https://loremflickr.com/320/240',
        'description': 'eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna'
    }), new Product({
        'name': 'Shopper Bag - S - 4',
        'image': 'https://loremflickr.com/320/240',
        'description': 'tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas'
    }), new Product({
        'name': 'Petite Baguette',
        'image': 'https://loremflickr.com/320/240',
        'description': 'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices'
    }), new Product({
        'name': 'Ecolab - Orange Frc, Cleaner',
        'image': 'https://loremflickr.com/320/240',
        'description': 'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla'
    }), new Product({
        'name': 'Wine - Chateau Aqueria Tavel',
        'image': 'https://loremflickr.com/320/240',
        'description': 'turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in'
    }), new Product({
        'name': 'Butter - Unsalted',
        'image': 'https://loremflickr.com/320/240',
        'description': 'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla'
    })
];
var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}