import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/ViewQuestionDetail';
import { styled } from 'styled-components';
import CreateAnswer from '../components/CreateAnswer';
import ViewAnswer from '../components/ViewAnswer';

export default function QuestionDetail() {
  let params = useParams();

  const handleQuestionDelete = () => {
    // API 요청을 보내고 삭제 처리진행
    // API 요청 성공 시 Redux 상태 업데이트 등
    // 삭제 처리 후 질문 목록 페이지로 이동
    // 이동 경로
    history.push('/questions'); // 질문 목록 페이지로 이동
  };

  return (
    <QuestionDetailPage>
      <ViewQuestionDetail questionId={params.id} />
      <ViewAnswer questionId={params.id} />
      <CreateAnswer questionId={params.id} />
      <button onClick={handleQuestionDelete}>Delete Question</button>
    </QuestionDetailPage>
  );
}

const QuestionDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 20px;

  h2 {
    width: 50vw;
    float: none;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    color: #232629;
    font-weight: 400;
    padding-top: 8px;
    font-size: 1.3rem;
  }
`;
