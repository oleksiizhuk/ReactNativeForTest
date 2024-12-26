### O **Open-Closed Principle (OCP)**

#### Key Takeaways:
- Open for extension but closed for modification
- Create extensible components using props, children, or HOCs.

#### BAD
To add a new notification type, you need to modify the component by adding another else if

#### GOOD 
Notification logic is split into separate components. A new type is added without changes to Notification, respecting OCP.

