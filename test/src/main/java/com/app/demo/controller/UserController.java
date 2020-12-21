package com.app.demo.controller;

import com.app.demo.model.User;
import com.app.demo.repository.UserRepository;
import com.app.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception {
        if(userService.fetchUserByEmailId(user.getEmailId()) != null) {
            throw new Exception("already exists"); // 500 internal server error with message already exists
        }
        return userService.saveUser(user);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {

        System.out.println(user.toString());

        String loginEmail = user.getEmailId();
        String loginPass = user.getPassword();

        User validUser = null;

        if( loginEmail != null && loginPass != null) {
            validUser = userService.fetchUserByEmailAndPassword(loginEmail,loginPass);
            if(validUser == null) { // internal 500 server error with message below
                throw new Exception(" user with credentials doesnt exist please register yourself first");
            }
        }
        return validUser;
    }

    @GetMapping("/getusers")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> fetchProjectMembers() throws Exception{
        List<User> userList = null;
        userList = userService.fetchEmployees();
        if(userList != null) {
            return userList;
        } else {
            throw new Exception("no project members found");
        }
    }


}
