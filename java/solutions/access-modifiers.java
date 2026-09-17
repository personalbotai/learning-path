class Base {
    private int hidden = 10;
    int packageVisible = 20;
    protected int protectedField = 30;
    public int publicField = 40;

    private void privateMethod() { System.out.println("private"); }
    void packageMethod() { System.out.println("package"); }
    protected void protectedMethod() { System.out.println("protected"); }
    public void publicMethod() { System.out.println("public"); }
}

public class Main {
    public static void main(String[] args) {
        Base b = new Base();
        // b.hidden = 1; // compile error: private
        b.packageVisible = 2; // OK: same package
        b.protectedField = 3; // OK: same package
        b.publicField = 4; // OK

        // b.privateMethod(); // error
        b.packageMethod(); // OK
        b.protectedMethod(); // OK
        b.publicMethod(); // OK
    }
}

class Subclass extends Base {
    public void test() {
        // hidden = 1; // cannot access private
        super.packageVisible = 2; // OK (same package)
        super.protectedField = 3; // OK (protected)
        super.publicField = 4; // OK

        // super.privateMethod(); // no
        super.packageMethod(); // OK
        super.protectedMethod(); // OK
        super.publicMethod(); // OK
    }
}