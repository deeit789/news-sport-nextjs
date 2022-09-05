import {
  Avatar,
  Button,
  Comment,
  Divider,
  Form,
  Input,
  List,
  Typography,
} from "antd";
import moment from "moment";
import React, { useState } from "react";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`Bình luận (${comments.length})`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={onChange}
        value={value}
        placeholder="Ý kiến của bạn..."
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Gửi
      </Button>
    </Form.Item>
  </>
);

const AddComment = () => {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <>
          <Typography.Text>Bình luận (0)</Typography.Text>
          <Divider />
        </>
      )}
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

export default AddComment;
