# CRUD with NET Core 6 & Angular 14 & EF Core & SQL Server - Frontend
## Alessandro Capelli

Requirements:
- Node
- NPM
- NPX
- Angular

Manage Angular:
- Install Angular in a custom folder: 
```
npm install --prefix <path> <package>
```

- NPX is an NPM package runner and allows to execute JS package without even installing it:
```
npx -p @angular/cli ng new <project-name>
```

- Use Angular directly from the folder:
```
npx ng <command>
```

Open/Close Ports (Mac):
- Find out the process ID (PID) which is occupying the port number:
```
sudo lsof -i :<port>
```

- Kill the process:
```
sudo kill -9 <PID>
```
