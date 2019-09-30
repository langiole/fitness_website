package com.collabera.FeMan.service;

import com.collabera.FeMan.model.Session;
import org.springframework.stereotype.Service;
import org.springframework.util.AlternativeJdkIdGenerator;
import org.springframework.util.IdGenerator;

import java.util.ArrayList;
import java.util.List;

@Service
public class SessionService {
    private static List<Session> sessions = new ArrayList<Session>();
    IdGenerator generator = new AlternativeJdkIdGenerator();


    public String generateSession(Long userId) {
        String sessionId = generator.generateId().toString();
        sessions.add(new Session(sessionId, userId));
        return sessionId;
    }

    public Long findUserId(String sessionId) {
        for (Session s : sessions) {
            if (s.getSession_id().equals(sessionId)) {
                return s.getUser_id();
            }
        }
        return null;
    }

    public List<Session> findAll() {
        return sessions;
    }
}
