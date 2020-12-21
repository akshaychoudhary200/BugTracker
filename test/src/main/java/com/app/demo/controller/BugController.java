package com.app.demo.controller;

import com.app.demo.model.Bugs;
import com.app.demo.repository.BugRepository;
import com.app.demo.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

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

    @PutMapping("/bugsstatusupdate/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Bugs> updateBugStatus(@PathVariable Long id,@RequestBody Bugs bugsDetails) throws Exception {
        Bugs bugs = bugRepository.findById(id)
                .orElseThrow(() -> new Exception("not found "+id));

        bugs.setBugStatus(bugsDetails.getBugStatus());

        Bugs updatedBugs = bugRepository.save(bugs);
        return ResponseEntity.ok(updatedBugs);
    }

    @GetMapping("/getbugbyid/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<Bugs> getBugById(@PathVariable(value = "id") Long id) {
        Optional<Bugs> bug = Optional.of(new Bugs());
        bug = bugRepository.findById(id);
        return bug;
    }

    @GetMapping("/getallbugs")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Bugs> getAllBugs() {
        List<Bugs> bugsList = new ArrayList<>();
        return bugRepository.findAll();
    }

    @DeleteMapping("/deletebugbyid/{bugId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Map<String, Boolean>> deletBugById(@PathVariable Long bugId) throws Exception {
        Bugs bugs = bugRepository.findById(bugId).orElseThrow(()->new Exception("bug does not exists"));
        bugRepository.delete(bugs);
        Map<String, Boolean> resp = new HashMap<>();
        resp.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(resp);
    }

}
