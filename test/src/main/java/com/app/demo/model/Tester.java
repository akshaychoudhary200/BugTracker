package com.app.demo.model;

import javax.persistence.*;

@Entity
@Table
public class Tester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long testerId;
    private String testerName;
    private String projectId;

    public Tester() { }


}
