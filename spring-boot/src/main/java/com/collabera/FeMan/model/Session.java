package com.collabera.FeMan.model;

public class Session {
    private String session_id;
    private Long user_id;

    public Session(String session_id, Long user_id) {
        this.session_id = session_id;
        this.user_id = user_id;
    }

    public String getSession_id() {
        return this.session_id;
    }

    public Long getUser_id() {
        return this.user_id;
    }
}
