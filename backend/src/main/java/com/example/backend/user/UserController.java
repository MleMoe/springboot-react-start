package com.example.backend.user;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"},allowCredentials = "true",allowedHeaders = {"X-Custom-Header"},
        maxAge = 3600L, methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.HEAD})
@RequestMapping("/users")
public class UserController {
    private UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping//查
    public List<User> getList() {
        return userRepository.findAll();
    }
    @PostMapping//改和增
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @DeleteMapping(value = "/{uid}")//删
    public void delUser(@PathVariable("uid") Integer uid
    ) {
        userRepository.deleteById(uid);
    }
}
