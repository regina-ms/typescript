import Cart from "../classCart";
import Movie from "../classMovie";
import Book from "../classBook";

test('new card should be empty', () => {
const cart = new Cart();
expect(cart.items.length).toBe(0);
});

test('item should be added to cart', () => {
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    cart.add(book);
    expect(cart.items.length).toBe(1)
});

test('item count and totalPrice should increased', () => {
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    cart.add(book);
    cart.add(book);
    expect(cart.items[0].count).toBe(2);
    expect(cart.items[0].totalPrice).toBe(1600);
});

test('sum of empty cart should be 0', () => {
    const cart = new Cart();
    expect(cart.sum()).toBe(0);
})

test('should return 0 ', () => { 
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    const movie = new Movie(1008, 'movie', 100);
    cart.add(book);
    cart.add(book);
    cart.add(movie);
    expect(cart.sum()).toBe(1700);
})

test('should return total sum of items with discount', () => {
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    const movie = new Movie(1008, 'movie', 100);
    cart.add(book);
    cart.add(book);
    cart.add(movie);
    expect(cart.discountSum(10)).toBe(1530)
})

test('should delete item from cart', () => {
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    cart.add(book);
    cart.deleteItem(7058);
    expect(cart.items.length).toBe(0)
})

test('should lower item count and totalPrice', () => {
    const cart = new Cart();
    const book = new Book(7058, 'mir', 800);
    cart.add(book);
    cart.add(book);
    cart.deleteItem(7058);
    expect(cart.items[0].count).toBe(1);
    expect(cart.items[0].totalPrice).toBe(800);
})
