import java.util.*;

abstract class Shape {
    String color;

    Shape(String color) { this.color = color; }

    abstract double area();

    void describe() {
        System.out.println("Shape color: " + color);
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(String color, double w, double h) {
        super(color);
        width = w; height = h;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape c = new Circle("Red", 2.5);
        Shape r = new Rectangle("Blue", 4, 3);

        System.out.println("Circle area: " + c.area());
        System.out.println("Rect area: " + r.area());
    }
}