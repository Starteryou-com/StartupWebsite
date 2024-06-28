from fastapi.testclient import TestClient
import pytest
from Main import app

client = TestClient(app)


@pytest.fixture(scope="module")
def test_app():
    client = TestClient(app)
    yield client


def test_get_data(test_app):
    response = test_app.get("/data")
    assert response.status_code == 200
    assert response.json() == {"message": "Data not found"}
