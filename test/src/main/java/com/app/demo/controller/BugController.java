package com.app.demo.controller;

import com.app.demo.model.Bugs;
import com.app.demo.repository.BugRepository;
import com.app.demo.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BugController {

    @Autowired
    private BugService bugService;
    @Autowired
    private BugRepository bugRepository;

    @GetMapping("/getbuglistid/{assignTo}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Bugs> getBugsListByUserId(@PathVariable(value = "assignTo") Long assignTo) throws Exception {
       List<Bugs> bugsOptional = new ArrayList<>();
            bugsOptional   =  bugRepository.findAllByUserId(assignTo);
       return bugsOptional;
    }
}
