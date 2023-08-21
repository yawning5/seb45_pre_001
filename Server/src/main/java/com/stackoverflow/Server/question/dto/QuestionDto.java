package com.stackoverflow.Server.question.dto;

import com.stackoverflow.Server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class QuestionDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        private long memberId;
        private String nickname;
        private String title;
        private String questionBody;

        // 여기서 memberId를 받아오는데 굳이 nickname까지 받아와야 할까?
        // service 나 controller에서 member객체를 Id로 찾아서 세팅해주면 되는거 같은데?
        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            member.setNickname(nickname);
            return member;
        }
    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private long questionId;
        private long memberId;
        private String nickname;
        private String title;
        private String questionBody;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            member.setNickname(nickname);
            return member;
        }
    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class search {
        private long questionId;
        private String title;
        private String questionBody;
    }
}
