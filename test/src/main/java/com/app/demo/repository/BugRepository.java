package com.app.demo.repository;

import com.app.demo.model.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BugRepository extends JpaRepository<Bugs,Long> {
    public List<Bugs> findAllByUserId(Long assignTo);

}
