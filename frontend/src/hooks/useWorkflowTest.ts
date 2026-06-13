import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getRememberedTest } from "../utils/rememberTest";

import { useTest } from "../contexts/testContext";
import { useDom } from "../contexts/domContext";

import testService from "../services/test.service";

export const useWorkflowTest = (testId?: string) => {
  const auth = useSelector((state: any) => state.auth);

  const { addToast } = useDom();

  const {
    test,
    setTest,

    questions,
    setQuestions,

    resetTest,
  } = useTest();

  useEffect(() => {
    if (!testId) {
      return;
    }

    restoreOrLoad();
  }, [testId]);

  const restoreOrLoad = async () => {
    if (test && test._id === testId) {
      return;
    }
    
    if (!testId) {
      return;
    }

    const remembered = getRememberedTest(auth.user._id, testId);

    if (remembered && remembered.test?._id === testId) {
      setTest(remembered.test);

      setQuestions(remembered.questions || []);

      return;
    }

    await loadInitial();
  };

  const loadInitial = async () => {
    try {
      resetTest();

      const response = await testService.getById(testId as string);

      setTest(response.data.data);

      setQuestions(response.data.data.questions || []);
    } catch {
      addToast("Unable to load test", "error");
    }
  };

  return {
    test,
    questions,
  };
};
